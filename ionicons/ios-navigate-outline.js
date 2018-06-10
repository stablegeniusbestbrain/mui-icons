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
        _react2.default.createElement('path', { d: 'M256 64.5c51.1 0 99.2 19.9 135.4 56.1s56.1 84.2 56.1 135.4-19.9 99.2-56.1 135.4-84.2 56.1-135.4 56.1-99.2-19.9-135.4-56.1C84.5 355.2 64.5 307.1 64.5 256s19.9-99.2 56.1-135.4c36.2-36.1 84.3-56.1 135.4-56.1m0-16.5C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z' }),
        _react2.default.createElement('path', { d: 'M352 160l-223.7 96H256v128z' })
      )
    )
  );
};

exports.default = Icon;