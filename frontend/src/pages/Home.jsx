import { HomeContainer, TextAnime, Description } from "./HomeStyle";

const Home = () => {
  return (
    <HomeContainer>
      <p className="title">독(Doc) + 도(섬)</p>
      <TextAnime>
        <p>독도에 오신 걸 환영합니다</p>
      </TextAnime>
      <Description>
        <p>문서편집기 <strong>독도</strong>는 영어 <strong>Doc</strong>ument와 한자 섬 <strong>島(도)</strong>의 합성어입니다.</p>
        <p className="slogan">우리는 독도만큼 아름다운 문서 편집 공간을 제공합니다.</p>
      </Description>
    </HomeContainer>
  );
};

export default Home;
