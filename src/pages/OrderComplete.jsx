import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderComplete = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const orderData = localStorage.getItem('currentOrder');
        if (orderData) {
            setOrder(JSON.parse(orderData));
            // Scroll to top AFTER setting state to ensure content is ready
            setTimeout(() => window.scrollTo(0, 0), 0);
        }
    }, []);

    if (!order) return <div className="container">주문 정보가 없습니다.</div>;

    return (
        <div className="container" style={{ paddingBottom: '40px', textAlign: 'center' }}>
            <div style={{ marginTop: '60px', marginBottom: '32px' }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px auto',
                    color: '#fff',
                    fontSize: '2.5rem'
                }}>
                    ✓
                </div>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>주문이 완료되었습니다.</h2>
                <p style={{ color: 'var(--color-text-sub)' }}>맛있게 준비해 드릴게요.</p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>주문 상세</h3>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{order.name}</h4>
                <div style={{ marginBottom: '16px', color: '#666', fontSize: '0.95rem' }}>
                    {Object.entries(order.options).map(([key, value]) => (
                        <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <span style={{ textTransform: 'capitalize', whiteSpace: 'nowrap', flexShrink: 0, marginRight: '8px' }}>{key === 'vegetables' ? '채소' : key === 'noodle' ? '면' : key === 'grain' ? '곡물' : key === 'sauce' ? '소스' : key === 'topping' ? '토핑' : key === 'dressing' ? '드레싱' : key}</span>
                            <span>{Array.isArray(value) ? value.join(', ') : value}</span>
                        </div>
                    ))}
                </div>

                <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px' }}>
                    <h5 style={{ marginBottom: '12px', color: '#424242' }}>영양 성분 총합</h5>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: '700', color: 'var(--color-primary-dark)' }}>
                        <span>칼로리</span>
                        <span>{order.nutrition.calories} kcal</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.9rem' }}>
                        <span>단백질</span>
                        <span>{order.nutrition.protein}g</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.9rem' }}>
                        <span>탄수화물</span>
                        <span>{order.nutrition.carbs}g</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <span>지방</span>
                        <span>{order.nutrition.fat}g</span>
                    </div>
                </div>
            </div>

            <button
                className="btn-primary"
                onClick={() => navigate('/recommendation')}
                style={{ marginTop: '24px' }}
            >
                추가 주문하기
            </button>
        </div>
    );
};

export default OrderComplete;
