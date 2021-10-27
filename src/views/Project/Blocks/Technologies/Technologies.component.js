import React from 'react';
import PropTypes from 'prop-types';
import Chip from "../../../../components/commons/Chip";
import { List } from "./Technologies.style";

const Technologies = ({list}) => (
  <List>
    {(
      list.map((technology => (
        <Chip label={technology.name} icon={technology.icon.url} />
      )))
    )}
  </List>
);

Technologies.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    })
  }))
};

export default Technologies;
