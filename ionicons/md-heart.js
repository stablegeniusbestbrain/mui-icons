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
        _react2.default.createElement('path', { d: 'M256 448l-30.164-27.21C118.718 322.44 48 258.61 48 179.094 48 114.22 97.918 64 162.4 64c36.4 0 70.717 16.742 93.6 43.947C278.882 80.742 313.2 64 349.6 64 414.082 64 464 114.22 464 179.095c0 79.516-70.72 143.348-177.836 241.694L256 448z' })
      )
    )
  );
};

exports.default = Icon;