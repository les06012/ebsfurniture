import { Project, FAQ } from '../types';

export const PROJECT_CATEGORIES = ['주거공간', '상업공간', '맞춤가구'];

export const getCategories = (): string[] => {
  const savedCategories = localStorage.getItem('projectCategories');
  return savedCategories ? JSON.parse(savedCategories) : PROJECT_CATEGORIES;
};

export const saveCategories = (categories: string[]) => {
  localStorage.setItem('projectCategories', JSON.stringify(categories));
};

export const PROJECTS: Project[] = [];

export const getProjects = (): Project[] => {
  const savedProjects = localStorage.getItem('customProjects');
  const initialProjects = savedProjects ? JSON.parse(savedProjects) : [];
  
  const savedDeleted = localStorage.getItem('deletedProjects');
  const deletedProjects = savedDeleted ? JSON.parse(savedDeleted) : [];

  const projectMap = new Map();
  PROJECTS.forEach(p => projectMap.set(p.id, p));
  initialProjects.forEach((p: Project) => projectMap.set(p.id, p));
  
  return Array.from(projectMap.values()).filter(p => !deletedProjects.includes(p.id));
};

export const FAQS: FAQ[] = [
  {
    question: "상담 및 실측은 어떻게 진행되나요?",
    answer: "전화나 홈페이지를 통해 문의를 주시면 1차 유선 상담 후 현장을 방문하여 가구가 배치될 공간을 실측하고 반입 경로를 점검합니다."
  },
  {
    question: "가구 제작 견적은 어떤 기준으로 산정되나요?",
    answer: "가구의 크기, 선택하신 소재와 마감재의 등급, 내부 구조의 복잡도, 그리고 설치 현장의 특수성 등을 종합적으로 고려하여 산정됩니다."
  },
  {
    question: "제작 및 시공 기간은 어느 정도 소요되나요?",
    answer: "디자인 확정 후 일반적인 맞춤 가구는 2~4주 정도 소요되며, 상업 공간이나 규모가 큰 프로젝트의 경우 3~5주 정도 소요됩니다."
  },
  {
    question: "거주 중인 집에도 맞춤 가구 시공이 가능한가요?",
    answer: "네, 가능합니다. 대부분의 공정이 공장에서 이루어지며 현장에서는 조립 및 설치만 진행되므로 거주 중에도 충분히 시공이 가능합니다."
  },
  {
    question: "원하는 디자인의 가구 사진이 있는데 똑같이 제작 가능한가요?",
    answer: "고객님이 원하시는 디자인 레퍼런스를 바탕으로 공간의 크기와 실용성에 맞게 최적화하여 맞춤 제작해 드립니다."
  },
  {
    question: "디자인이나 소재 변경은 언제까지 가능한가요?",
    answer: "가구 제작이 본격적으로 들어가기 전(자재 발주 전)까지는 변경이 가능합니다. 제작이 시작된 후에는 변경이 어려울 수 있습니다."
  },
  {
    question: "설치 중 추가 비용이 발생할 수도 있나요?",
    answer: "사전에 실측과 상담을 꼼꼼히 진행하므로 원칙적으로 추가 비용은 발생하지 않습니다. 단, 현장에서 고객님의 변심으로 인한 구조 변경 시 추가 비용이 발생할 수 있습니다."
  },
  {
    question: "AS 기간과 범위는 어떻게 되나요?",
    answer: "가구 설치 완료 후 1년간 무상 AS를 보장해 드립니다. 하드웨어 불량이나 제작 결함에 대해서는 신속하게 처리해 드립니다."
  },
  {
    question: "상업공간용 맞춤 가구도 제작하시나요?",
    answer: "네, 카페, 식당, 오피스, 매장 등 상업 공간의 특성과 브랜드 정체성에 맞는 다양한 집기와 맞춤 가구 제작 경험이 풍부합니다."
  },
  {
    question: "지방 지역도 배송 및 설치가 가능한가요?",
    answer: "수도권(서울, 경기, 인천)을 중심으로 활동하고 있으나, 프로젝트의 규모에 따라 지방 배송 및 설치도 가능하오니 별도 문의 부탁드립니다."
  }
];
