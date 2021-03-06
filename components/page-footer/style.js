import styled from 'styled-components';

export const FooterWrap = styled.div`
  padding: 65px 0;

  .site-meta {
    margin-bottom: 30px;
    width: 350px;

    .brand-detail {
      display: flex;
      align-items: center;
    }

    .brand {
      display: flex;
      align-items: center;
      font-weight: 600;
      color: #000;
      text-decoration: none;

      img {
        height: 25px;
        width: 25px;
        margin-right: 8px;
      }
    }

    .preposition {
      margin: 0 7px;
    }

    .follow-author {
      background-color: #1e99e6;
      border-radius: 3px;
      color: #fff;
      cursor: pointer;
      font-size: 12px;
      font-weight: 600;
      line-height: 20px;
      padding: 0 6px;
      white-space: nowrap;
      text-decoration: none;

      &:hover {
        background: #43aaea;
      }
    }

    .brand-explanation {
      color: #999;

      p {
        font-size: 15px;
        line-height: 24px;
        margin: 15px 0;
      }
    }

    .meta-links {
      color: #a3a3a3;
      font-size: 15px;

      a {
        color: #000;
        text-decoration: none;
      }
    }
  }

  .foot-col {
    margin-bottom: 20px;
    a {
      color: #999;
    }

    .foot-header {
      font-weight: 500;
      margin-bottom: 7px;
    }

    ul {
      margin: 0;
      padding: 0;

      li {
        margin-bottom: 2px;
        font-size: 15px;
        list-style: none;
        margin-left: 0;
      }
    }
  }
`;
