
import React from 'react';
import { SiteConfig, SiteContent, Post, EducationEvent } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  primaryColor: '#D4AF37', // Gold
  siteName: 'ARTonTOK',
  seoTitle: 'ARTonTOK - 상위 0.1%를 위한 아트·독서코칭',
  seoDescription: '상위 0.1% 부자 클럽의 아트·독서코칭연구회 & 비즈니스 클럽'
};

export const INITIAL_CONTENT: SiteContent = {
  heroTitle: {
    KOR: '상위 0.1% 부자 클럽의 아트·독서코칭연구회',
    ENG: 'Art & Reading Coaching for the Top 0.1%'
  },
  heroSub: {
    KOR: '비즈니스 클럽 1기 초대 : 예술적 통찰로 부의 품격을 완성하다',
    ENG: 'Business Club 1st Invitation: Completing Wealth with Artistic Insight'
  },
  newsSectionTitle: {
    KOR: 'Global Art & Wealth News',
    ENG: 'Art News'
  },
  coachingSectionTitle: {
    KOR: 'Elite Coaching Records',
    ENG: 'Art Coaching Records'
  }
};

export const SAMPLE_POSTS: Post[] = [
  {
    id: 'n1',
    type: 'news',
    title: { KOR: '2025 글로벌 자산가들이 주목하는 아트 테크', ENG: 'Art Tech for Global Wealth in 2025' },
    excerpt: { KOR: '단순한 소장을 넘어 자산의 가치를 높이는 전략적 아트 컬렉팅의 모든 것.', ENG: 'Strategic art collecting beyond possession to increase asset value.' },
    content: { KOR: '상세 뉴스 내용...', ENG: 'Detailed news content...' },
    imageUrl: 'https://images.unsplash.com/photo-1574350800174-8182f6479717?q=80&w=800&auto=format&fit=crop',
    date: '2024-05-22',
    author: 'Wealth Editor'
  },
  {
    id: 'c1',
    type: 'coaching',
    title: { KOR: '비즈니스 리더를 위한 인문학적 미학 코칭', ENG: 'Humanistic Aesthetics Coaching for Leaders' },
    excerpt: { KOR: '철학과 예술의 접점에서 찾아낸 비즈니스 의사결정의 새로운 패러다임.', ENG: 'A new paradigm for business decision-making found at the intersection of philosophy and art.' },
    content: { KOR: '코칭 상세 기록...', ENG: 'Detailed coaching record...' },
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    date: '2024-04-12',
    author: 'Chief Mentor'
  }
];

export const SAMPLE_EVENTS: EducationEvent[] = [
  {
    id: 'e1',
    title: { KOR: '1기 1차 비즈니스 클럽 오프닝 세미나', ENG: '1st Business Club Opening Seminar' },
    instructor: { KOR: 'ARTonTOK 마스터팀', ENG: 'ARTonTOK Masters' },
    date: new Date().toISOString().split('T')[0],
    time: '18:30 - 20:30',
    price: 500000,
    description: { KOR: '선택된 소수만을 위한 예술과 비즈니스의 융합 세션', ENG: 'Fusion session of art and business for the selected few' }
  }
];

export const TRANSLATIONS = {
  navHome: { KOR: '홈', ENG: 'Home' },
  navNews: { KOR: '아트 뉴스', ENG: 'Art News' },
  navCoaching: { KOR: '아트 코칭', ENG: 'Art Coaching' },
  navSchedule: { KOR: '클럽 일정', ENG: 'Schedule' },
  navAdmin: { KOR: '관리자', ENG: 'Admin' },
  btnLearnMore: { KOR: '상세보기', ENG: 'Learn More' },
  btnApply: { KOR: '초대 신청', ENG: 'Apply Now' },
  btnPay: { KOR: '결제하기', ENG: 'Proceed to Payment' },
  btnExploreCoaching: { KOR: '마스터 코칭 둘러보기', ENG: 'EXPLORE ELITE COACHING' },
  btnJoinClub: { KOR: '비즈니스 클럽 가입하기', ENG: 'JOIN BUSINESS CLUB' },
  footerRights: { KOR: '모든 권리 보유', ENG: 'All rights reserved' },
  adminTitle: { KOR: '관리자 대시보드', ENG: 'Admin Dashboard' },
  paymentTitle: { KOR: '안전한 결제', ENG: 'Secure Checkout' },
  paymentSub: { KOR: '보안 결제 게이트웨이를 통한 처리 (PortOne/Stripe)', ENG: 'Processing via Secure Payment Gateway (PortOne/Stripe)' },
  subtotal: { KOR: '소계', ENG: 'Subtotal' },
  vat: { KOR: '부가세 (10%)', ENG: 'VAT (10%)' },
  total: { KOR: '총 결제 금액', ENG: 'Total' },
  creditCard: { KOR: '신용카드', ENG: 'Credit Card' },
  kakaoPay: { KOR: '카카오페이', ENG: 'Kakao Pay' },
  goBack: { KOR: '뒤로 가기', ENG: 'Go Back' },
  footerDesc: { KOR: 'ARTonTOK은 상위 0.1%의 예술적 감수성과 비즈니스 통찰력을 연결하는 독보적인 플랫폼입니다.', ENG: 'ARTonTOK is a unique platform connecting the artistic sensitivity and business insight of the top 0.1%.' },
  footerService: { KOR: '주요 서비스', ENG: 'Our Services' },
  footerContact: { KOR: '컨시어지', ENG: 'Contact Us' },
  footerLocation: { KOR: '서울 강남구 청담동 럭셔리 라운지', ENG: 'Luxury Lounge, Cheongdam-dong, Seoul' },
  serviceIntroTitle: { KOR: 'Premium Services', ENG: 'Premium Services' },
  viewMoreRecords: { KOR: '전체 레코드 보기', ENG: 'View All Records' }
};
