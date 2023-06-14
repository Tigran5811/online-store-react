import React from 'react';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import avatar from '../../ui-kit/assets/images/avatar.png';
import { apiUrl } from '../../constants/url';

const cx = classNames.bind(styles);

export const Table = ({
  usersData, userData, columns, onRowClick,
}) => (
  <table>
    <thead>
      <tr>{columns.map((item) => <th key={item.accessor}>{item.Header}</th>)}</tr>
    </thead>
    <tbody>
      {usersData?.map((item, index) => (
        <tr
          onClick={() => {
            onRowClick(userData[index]);
          }}
          key={index}
          className={cx({ pointer: Boolean(onRowClick) })}
        >
          {columns.map((columns, i) => {
            if (columns.Header === 'Email') {
              return <td key={i}><a href="mailto:">{item[`col${i + 1}`]}</a></td>;
            }

            if (columns.Header === 'Image') {
              return <td key={i}><img src={item[`col${i + 1}`].filename ? `${apiUrl}${item[`col${i + 1}`].filename}` : avatar} alt="AS" /></td>;
            }
            return <td key={i}>{item[`col${i + 1}`]}</td>;
          })}
        </tr>
      ))}
    </tbody>
    <tfoot />
  </table>
);
