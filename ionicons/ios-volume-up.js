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
        _react2.default.createElement('path', { d: 'M374.1 128l-13.6 10.3C384.6 171.2 399 211.9 399 256c0 44.1-14.4 84.8-38.6 117.7L374 384c26.3-35.7 41.9-80 41.9-128s-15.5-92.3-41.8-128zM320 351.8c20-26.8 32-59.9 32-95.8s-12-69-32-95.8l-13.6 10.1c17.9 24 28.6 53.6 28.6 85.7s-10.7 61.7-28.6 85.7l13.6 10.1zm-46.9-31.9C286.8 302 295 280 295 256s-8.2-46-21.9-63.9l-13.5 9.8c11.6 15.1 18.5 33.8 18.5 54.1s-6.9 38.9-18.5 54.1l13.5 9.8zM153.9 216H96v80h57.9l70.1 56V160z' })
      )
    )
  );
};

exports.default = Icon;