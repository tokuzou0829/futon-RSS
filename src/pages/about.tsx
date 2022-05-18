import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              このサイトはとくぞうの推しのRSSを取得し公開するためのサイトです.catnose氏の
              <a href="https://github.com/catnose99/team-blog-hub">
                Team Blog Hub
              </a>
              をもとに開発された
              <a href="https://github.com/yutakobayashidev/team-blog-hub-notion-api">
                Team Blog Hub Notin API
              </a>  
              を使用してこのサイトは作られています。
            </p>
            <p>
              RSSは約1時間で更新されるように設定されています。
            </p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
