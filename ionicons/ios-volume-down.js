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
        _react2.default.createElement('path', { d: 'M330.4 319.9C343.9 302 352 280 352 256s-8.1-46-21.6-63.9l-13.3 9.8c11.4 15.1 18.2 33.8 18.2 54.1 0 20.3-6.8 39-18.2 54.1l13.3 9.8zM217.9 216H160v80h57.9l69.1 56V160z' })
      )
    )
  );
};

exports.default = Icon;