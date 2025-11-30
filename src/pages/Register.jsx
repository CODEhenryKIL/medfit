import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/datepicker.css';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        birthdate: '',
        gender: 'female',
        height: '',
        weight: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save basic info to localStorage
        const existingData = JSON.parse(localStorage.getItem('userHealthData') || '{}');
        localStorage.setItem('userHealthData', JSON.stringify({ ...existingData, ...formData }));
        navigate('/health-detail');
    };

    const inputStyle = {
        width: '100%',
        padding: '16px',
        borderRadius: '16px',
        border: '1px solid #F5F5F5',
        backgroundColor: '#F9F9F9',
        fontSize: '16px', /* Prevent iOS zoom */
        outline: 'none',
        transition: 'all 0.2s',
        color: '#333',
        fontWeight: '500'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        fontWeight: '600',
        color: '#424242',
        fontSize: '0.95rem'
    };

    const sectionStyle = {
        marginBottom: '24px'
    };

    return (
        <div className="container" style={{ paddingBottom: '40px' }}>
            <header style={{ marginBottom: '32px', marginTop: '16px' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>프로필 설정</h2>
                <p style={{ color: 'var(--color-text-sub)' }}>맞춤형 식단을 위해 정보를 입력해주세요.</p>
            </header>

            <form onSubmit={handleSubmit}>
                {/* Basic Info */}
                <div style={sectionStyle}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--color-primary)' }}>기본 정보</h3>
                    <div style={{ marginBottom: '16px' }}>
                        <label style={labelStyle}>이름</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            style={inputStyle}
                            placeholder="홍길동"
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ flex: '1 1 0', minWidth: 0, position: 'relative' }}>
                            <label style={labelStyle}>생년월일</label>
                            <DatePicker
                                selected={formData.birthdate ? new Date(formData.birthdate) : null}
                                onChange={(date) => {
                                    // Format date as YYYY-MM-DD
                                    const formattedDate = date ? date.toISOString().split('T')[0] : '';
                                    setFormData(prev => ({ ...prev, birthdate: formattedDate }));
                                }}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="생년월일"
                                wrapperClassName="date-picker-wrapper"
                                popperPlacement="bottom-start"
                                customInput={
                                    <input
                                        style={{
                                            ...inputStyle,
                                            width: '100%',
                                            height: '54px'
                                        }}
                                    />
                                }
                                required
                            />
                        </div>
                        <div style={{ flex: '1 1 0', minWidth: 0 }}>
                            <label style={labelStyle}>성별</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                style={{
                                    ...inputStyle,
                                    width: '100%',
                                    minWidth: 0,
                                    height: '54px' /* Match date input height */
                                }}
                            >
                                <option value="female">여성</option>
                                <option value="male">남성</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Body Info */}
                <div style={sectionStyle}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--color-primary)' }}>신체 정보</h3>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={labelStyle}>키 (cm)</label>
                            <input
                                type="number"
                                name="height"
                                value={formData.height}
                                onChange={handleInputChange}
                                style={inputStyle}
                                placeholder="입력해주세요"
                                required
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={labelStyle}>몸무게 (kg)</label>
                            <input
                                type="number"
                                name="weight"
                                value={formData.weight}
                                onChange={handleInputChange}
                                style={inputStyle}
                                placeholder="입력해주세요"
                                required
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn-primary"
                    style={{
                        marginTop: '24px',
                        boxShadow: '0 8px 16px rgba(76, 175, 80, 0.3)'
                    }}
                >
                    내 건강 정보 등록하기
                </button>
            </form>
        </div>
    );
};

export default Register;
