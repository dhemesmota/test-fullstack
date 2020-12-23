/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useMemo, useEffect } from 'react';
import { FaBuilding } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import {
  Container,
  Item,
  ItemTitle,
  ItemList,
  ItemListMessagem,
} from './styles';
import api from '../../services/api';

interface ContentPageProps {
  title: string;
  icon:
    | 'fa-home'
    | 'fa-building'
    | 'fa-chat'
    | 'fa-danger'
    | 'fa-band-aid'
    | 'fa-calendar';
  content: Array<{
    type: string;
    title: string;
    properties: {
      categories: string[];
    };
  }>;
}

interface PostProps {
  title: string;
  category: string;
  content: string;
}

const Page: React.FC = () => {
  const location = useLocation();

  const queryParams = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);

  const [contentPage, setContentPage] = useState<ContentPageProps>(
    {} as ContentPageProps,
  );
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    api.get<ContentPageProps>(`pages/${queryParams.pg}`).then((response) => {
      setContentPage(response.data);
    });
    api.get<PostProps[]>('posts').then((response) => {
      setPosts(response.data);
    });
  }, [queryParams]);

  return (
    <Container>
      {contentPage.content?.length > 0 &&
        contentPage.content?.map((content) => (
          <Item key={content.title}>
            <ItemTitle>{content.title}</ItemTitle>
            <ItemList>
              {posts
                ?.filter((post) => {
                  const findCategory = content.properties.categories.find(
                    (category) => category === post.category,
                  );
                  if (findCategory) {
                    return post;
                  }

                  return undefined;
                })
                ?.map((findPost) => (
                  <ItemListMessagem key={findPost.title}>
                    <FaBuilding size={18} />
                    <p>{findPost.title}</p>
                  </ItemListMessagem>
                ))}
            </ItemList>
          </Item>
        ))}
      <Item>
        <ItemTitle>Mensagem do Presidente</ItemTitle>
        <ItemList>
          <ItemListMessagem>
            <FaBuilding size={18} />
            <p>O papel do novo centro da juventude para todos!</p>
          </ItemListMessagem>
        </ItemList>
      </Item>
    </Container>
  );
};

export default Page;
