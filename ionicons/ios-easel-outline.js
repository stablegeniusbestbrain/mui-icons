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
        _react2.default.createElement('path', { d: 'M464 96v256H48V96h416m0-16H48c-8.8 0-16 7.2-16 16v256c0 8.8 6.9 16 15.8 16H464c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zm-80 304l32 80h16.6L400 384zm-271.4 0L80 464h16.6l32-80zm135.4 0h16v48h-16z' }),
        _react2.default.createElement('path', { d: 'M432 128v192H80V128h352m16-16H64v224h384V112zM256 48c-8.8 0-16 7.2-16 16h32c0-8.8-7.2-16-16-16z' })
      )
    )
  );
};

exports.default = Icon;