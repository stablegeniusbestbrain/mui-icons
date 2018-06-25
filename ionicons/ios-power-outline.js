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
        _react2.default.createElement('path', { d: 'M390.7 97.9c-3.4-2.9-8.4-2.5-11.3.9-2.9 3.4-2.5 8.4.9 11.3 43 36.6 67.6 89.7 67.6 145.8C448 361.8 361.9 448 256 448S64 361.8 64 255.9c0-56.1 24.6-109.2 67.6-145.8 3.4-2.9 3.8-7.9.9-11.3-2.9-3.4-7.9-3.8-11.3-.9-46.5 39.6-73.2 97.2-73.2 158C48 370.6 141.3 464 256 464s208-93.4 208-208.1c0-60.8-26.7-118.4-73.3-158z' }),
        _react2.default.createElement('path', { d: 'M257 272c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8s-8 3.6-8 8v208c0 4.4 3.6 8 8 8z' })
      )
    )
  );
};

exports.default = Icon;