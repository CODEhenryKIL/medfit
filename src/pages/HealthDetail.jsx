import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HealthDetail = () => {
    const navigate = useNavigate();

    // Force scroll to top on mount
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [step, setStep] = useState(1);
    const [hasDisease, setHasDisease] = useState(null); // true, false, or null
    const [selectedDiseases, setSelectedDiseases] = useState([]);
    const [selectedGoals, setSelectedGoals] = useState([]);

    const diseaseOptions = [
        '암/항암 치료 중',
        '당뇨병',
        '고혈압',
        '신장질환'
    ];

    const goalOptions = [
        '체중 관리',
        '혈당 관리',
        '혈압·나트륨 관리',
        '장 건강',
        '피로·항산화(노화 관리)',
        '특별히 없다(건강식 추천)'
    ];

    const handleDiseaseToggle = (disease) => {
        // Single selection logic
        setSelectedDiseases([disease]);
    };

    const handleGoalToggle = (goal) => {
        if (goal === '특별히 없다(건강식 추천)') {
            setSelectedGoals(['특별히 없다(건강식 추천)']);
            return;
        }

        setSelectedGoals(prev => {
            const newGoals = prev.includes(goal)
                ? prev.filter(g => g !== goal)
                : [...prev.filter(g => g !== '특별히 없다(건강식 추천)'), goal];
            return newGoals;
        });
    };

    const handleNextStep = () => {
        if (hasDisease === null) {
            alert('질환 여부를 선택해주세요.');
            return;
        }
        setStep(2);
    };

    const handleSubmit = () => {
        // Save detailed info to localStorage
        const existingData = JSON.parse(localStorage.getItem('userHealthData') || '{}');
        const newData = {
            ...existingData,
            hasDisease,
            diseases: hasDisease ? selectedDiseases : [],
            goals: hasDisease ? [] : selectedGoals
        };
        localStorage.setItem('userHealthData', JSON.stringify(newData));
        navigate('/recommendation');
    };

    const containerStyle = {
        padding: '20px',
        paddingBottom: '40px',
        maxWidth: '600px',
        margin: '0 auto'
    };

    const headerStyle = {
        marginBottom: '32px',
        marginTop: '16px'
    };

    const questionStyle = {
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '20px',
        color: '#333',
        lineHeight: '1.5'
    };

    const optionContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    };

    const optionButtonStyle = (isSelected) => ({
        padding: '16px',
        borderRadius: '12px',
        border: `1px solid ${isSelected ? 'var(--color-primary)' : '#E0E0E0'}`,
        backgroundColor: isSelected ? 'var(--color-primary-light)' : '#fff',
        color: isSelected ? 'var(--color-primary-dark)' : '#333',
        fontSize: '1rem',
        fontWeight: '500',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    });

    const checkboxStyle = (isSelected) => ({
        width: '20px',
        height: '20px',
        borderRadius: '4px',
        border: `2px solid ${isSelected ? 'var(--color-primary)' : '#ccc'}`,
        backgroundColor: isSelected ? 'var(--color-primary)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '14px'
    });

    const buttonStyle = {
        width: '100%',
        padding: '16px',
        borderRadius: '16px',
        backgroundColor: 'var(--color-primary)',
        color: '#fff',
        border: 'none',
        fontSize: '1.1rem',
        fontWeight: '700',
        marginTop: '40px',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)'
    };

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>건강정보등록</h2>
                <p style={{ color: 'var(--color-text-sub)' }}>데이터 기반으로 AI가 메뉴를 추천드려요.</p>
            </header>

            {step === 1 && (
                <div>
                    <h3 style={questionStyle}>Q1. 현재 의사에게 진단받았거나 지속적으로 관리 중인 질환이 있나요? (필수)</h3>
                    <div style={optionContainerStyle}>
                        <button
                            style={optionButtonStyle(hasDisease === true)}
                            onClick={() => setHasDisease(true)}
                        >
                            <div style={checkboxStyle(hasDisease === true)}>{hasDisease === true && '✓'}</div>
                            있다
                        </button>
                        <button
                            style={optionButtonStyle(hasDisease === false)}
                            onClick={() => setHasDisease(false)}
                        >
                            <div style={checkboxStyle(hasDisease === false)}>{hasDisease === false && '✓'}</div>
                            없다
                        </button>
                    </div>
                    <button style={buttonStyle} onClick={handleNextStep}>
                        다음 질문 선택하기
                    </button>
                </div>
            )}

            {step === 2 && (
                <div>
                    {hasDisease ? (
                        <>
                            <h3 style={questionStyle}>Q2. 해당되는 질환을 선택해주세요. (단일 선택)</h3>
                            <div style={optionContainerStyle}>
                                {diseaseOptions.map(option => (
                                    <button
                                        key={option}
                                        style={optionButtonStyle(selectedDiseases.includes(option))}
                                        onClick={() => handleDiseaseToggle(option)}
                                    >
                                        <div style={checkboxStyle(selectedDiseases.includes(option))}>
                                            {selectedDiseases.includes(option) && '✓'}
                                        </div>
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 style={questionStyle}>Q2. 현재 특별히 관리하고 싶은 건강 목표가 있다면 선택해주세요.</h3>
                            <div style={optionContainerStyle}>
                                {goalOptions.map(option => (
                                    <button
                                        key={option}
                                        style={optionButtonStyle(selectedGoals.includes(option))}
                                        onClick={() => handleGoalToggle(option)}
                                    >
                                        <div style={checkboxStyle(selectedGoals.includes(option))}>
                                            {selectedGoals.includes(option) && '✓'}
                                        </div>
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                    <button style={buttonStyle} onClick={handleSubmit}>
                        나에게 맞는 추천 메뉴 보기
                    </button>
                </div>
            )}
        </div>
    );
};

export default HealthDetail;
