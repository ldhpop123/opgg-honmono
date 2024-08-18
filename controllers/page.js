// 게임 전체 전적을 불러오는 함수 정의
exports.renderMain = (req, res) => {
    // 'main' 템플릿 렌더링, 'title' 및 'matchs'
    res.render('main', {
        title: '유저', // 페이지 타이틀을 설정합니다
        matchs: [], // 매치 목록을 설정합니다
    });
};