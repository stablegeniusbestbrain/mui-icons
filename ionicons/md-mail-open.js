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
        _react2.default.createElement('path', { d: 'M480 201.667c0-14.933-7.47-28.803-20.27-36.266L256 64 52.27 165.4C40.53 172.865 32 186.735 32 201.668v203.666C32 428.803 51.197 448 74.666 448h362.668c23.47 0 42.666-19.198 42.666-42.667V201.667zM256 304L84.63 192 256 106.667 427.37 192 256 304z' })
      )
    )
  );
};

exports.default = Icon;