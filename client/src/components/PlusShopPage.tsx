import * as S from '../styled/PlusShop'

const PlusShopPage = () => {
    return(
        <>
        <S.Banner />
        <S.Body>
            <h2>유라이브 PLUS 요금제</h2>
            <S.MemberShipDiv>
                <S.MemberShip></S.MemberShip>
                <S.MemberShip></S.MemberShip>
                <S.MemberShip></S.MemberShip>
            </S.MemberShipDiv>
            <S.Guidance>
                <h2>결제상품 이용 안내</h2>
                <ul>
                    <li>모든 상품은 출판물/후원으로 면세항목을 적용 받습니다.</li>
                    <li>이미 구매한 상품을 재차 구매시, 이용 가능 기간이 추가됩니다.</li>
                    <li>구입하신 이용권은 모든 디바이스에서 자유롭게 사용 가능합니다.</li>
                    <li>PLUS 월 정기 멤버십은 30일 단위로 이용권이 지급되며, 하루 전 (29일째) 자동결제 됩니다.</li>
                    <li>휴대전화, ARS 결제 취소는 당월 결제건에 한해서 가능합니다.</li>
                    <li>결제가 완료되기 전에 결제창을 닫으면 결제가 완료되지 않을 수 있습니다.</li>
                    <li>보너스 코인은 후원에 사용 불가합니다.</li>
                    <li>각 할인 혜택은 사전 예고 없이 종료될 수 있습니다.</li>
                    <li>자세한 사항은 고객센터(1588-3644/help@novelpia.com)로 문의해주시기 바랍니다.</li>
                </ul>
            </S.Guidance>
        </S.Body>
        </>
    )
}

export default PlusShopPage