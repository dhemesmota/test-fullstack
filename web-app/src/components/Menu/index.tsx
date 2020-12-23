import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import {
  FaHome,
  FaBuilding,
  FaCommentAlt,
  FaBandAid,
  FaCalendar,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { Container } from './styles';
import api from '../../services/api';

const icons = {
  'fa-home': <FaHome size={18} />,
  'fa-building': <FaBuilding size={18} />,
  'fa-chat': <FaCommentAlt size={18} />,
  'fa-danger': <FaExclamationTriangle size={18} />,
  'fa-band-aid': <FaBandAid size={18} />,
  'fa-calendar': <FaCalendar size={18} />,
};

interface PageProps {
  title: string;
  icon:
    | 'fa-home'
    | 'fa-building'
    | 'fa-chat'
    | 'fa-danger'
    | 'fa-band-aid'
    | 'fa-calendar';
  url: string;
}

const Header: React.FC = () => {
  const [pages, setPages] = useState<PageProps[]>();

  useEffect(() => {
    api.get<PageProps[]>('pages').then((response) => {
      if (response) {
        setPages(response.data);
      }
    });
  }, []);

  return (
    <Container>
      {pages?.map((page) => (
        <Link to={`/?pg=${page.url}`} key={page.url}>
          {icons[page.icon]}
          <span>{page.title}</span>
        </Link>
      ))}
    </Container>
  );
};

export default Header;
