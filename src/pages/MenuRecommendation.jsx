import React from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../data/menuData';

const MenuRecommendation = () => {
    const navigate = useNavigate();

    const handleQuickOrder = () => {
        // Hardcoded quick order for MVP: High Protein Pumpkin Risotto
        // In real app, fetch last order from DB/LocalStore
        const quickOrder = {
            id: 2,
            name: "고단백 단호박 크림 리조또",
            nutrition: { calories: 520, protein: 35, fat: 18, carbs: 55 }, // Example customized stats
            options: { grain: "현미", vegetables: ["양송이", "시금치"] }
        };
        localStorage.setItem('currentOrder', JSON.stringify(quickOrder));

        // Force scroll to top before navigation
        window.scrollTo(0, 0);

        navigate('/order-complete');
    };

    // Featured menu: 저당 두부면 샐러드 파스타 (ID: 1)
    const featuredMenu = menuItems.find(item => item.id === 1);

    return (
        <div className="container" style={{ paddingBottom: '40px' }}>
            <header style={{ marginBottom: '24px', marginTop: '16px' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>오늘의 한끼 처방</h2>
                <p style={{ color: 'var(--color-text-sub)', whiteSpace: 'pre-line', lineHeight: '1.5' }}>
                    등록해주신 관리 목표에 맞춰{'\n'}
                    메디핏이 추천하는 메뉴 입니다.
                </p>
            </header>

            {/* Today's Prescription (Featured Menu) */}
            {featuredMenu && (
                <div style={{ marginBottom: '40px' }}>
                    <div
                        className="card"
                        onClick={() => navigate(`/menu/${featuredMenu.id}`)}
                        style={{
                            padding: 0,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            border: '2px solid var(--color-primary)',
                            boxShadow: '0 8px 24px rgba(76, 175, 80, 0.2)'
                        }}
                    >
                        <div style={{
                            height: '200px',
                            backgroundColor: featuredMenu.imageColor,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img
                                src={featuredMenu.image}
                                alt={featuredMenu.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: '16px',
                                left: '16px',
                                backgroundColor: 'var(--color-primary)',
                                color: '#fff',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                            }}>
                                강력 추천
                            </div>
                        </div>
                        <div style={{ padding: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <h3 style={{ fontSize: '1.3rem', color: '#333', fontWeight: '700', wordBreak: 'keep-all' }}>{featuredMenu.name}</h3>
                                <span style={{
                                    backgroundColor: 'var(--color-primary-light)',
                                    color: 'var(--color-primary-dark)',
                                    padding: '6px 12px',
                                    borderRadius: '16px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600'
                                }}>
                                    {featuredMenu.baseNutrition.calories} kcal
                                </span>
                            </div>
                            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
                                {featuredMenu.description}
                            </p>
                            <button style={{
                                width: '100%',
                                padding: '14px',
                                backgroundColor: 'var(--color-primary)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}>
                                자세히 보기
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Recent Orders Section (Moved to middle) */}
            <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#757575' }}>최근 주문한 메뉴</h3>
                <div
                    className="card"
                    onClick={handleQuickOrder}
                    style={{
                        padding: '16px',
                        cursor: 'pointer',
                        border: '1px solid #eee',
                        backgroundColor: '#FAFAFA',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                    }}
                >
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        backgroundColor: '#FFF3E0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={menuItems.find(i => i.id === 2)?.image}
                            alt="고단백 단호박 크림 리조또"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '0.95rem', marginBottom: '4px', color: '#555', fontWeight: '600' }}>고단백 단호박 크림 리조또</h4>
                        <p style={{ fontSize: '0.8rem', color: '#888' }}>현미, 양송이, 시금치 추가</p>
                    </div>
                    <button style={{
                        padding: '6px 12px',
                        backgroundColor: '#9E9E9E',
                        color: '#fff',
                        borderRadius: '16px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        border: 'none'
                    }}>
                        재주문
                    </button>
                </div>
            </div>

            {/* All Menus */}
            <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--color-primary)' }}>전체 메뉴</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                {menuItems.map(item => (
                    <div
                        key={item.id}
                        className="card"
                        onClick={() => navigate(`/menu/${item.id}`)}
                        style={{
                            padding: 0,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            border: '1px solid #eee'
                        }}
                    >
                        <div style={{
                            height: '200px',
                            backgroundColor: item.imageColor,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                        </div>
                        <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <h3 style={{ fontSize: '1.1rem', color: '#333', fontWeight: '600' }}>{item.name}</h3>
                                <span style={{
                                    backgroundColor: 'var(--color-primary-light)',
                                    color: 'var(--color-primary-dark)',
                                    padding: '4px 8px',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    {item.baseNutrition.calories} kcal
                                </span>
                            </div>
                            <p style={{ color: '#757575', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default MenuRecommendation;
