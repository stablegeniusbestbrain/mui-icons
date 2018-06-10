'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M384 96V64H128v32H48v8c0 82 30.5 132.2 82 135.8 12.9 49.2 83.9 75.8 118 79.7V432h-88v16h192v-16h-88V319.5c34.1-3.9 105.1-30.5 118-79.7 51.5-3.6 82-53.7 82-135.8v-8h-80zM80.7 188.3c-7.1-13.7-15.6-37.8-16.6-76.3H128v111.4c-20-2.7-36.5-14.4-47.3-35.1zM368 224c0 27.3-23.9 46.7-43.9 58.1-26.5 15.1-55.7 21.9-68.1 21.9s-41.6-6.8-68.1-21.9c-20-11.5-43.9-30.8-43.9-58.1V80h224v144zm63.3-35.7C420.5 209 404 220.7 384 223.4V112h63.9c-1 38.5-9.5 62.6-16.6 76.3z' })
      )
    )
  );
};

exports.default = Icon;