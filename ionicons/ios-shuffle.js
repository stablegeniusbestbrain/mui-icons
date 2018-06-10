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
        _react2.default.createElement('path', { d: 'M443.3 325.7l-35.6-35.4c-3.1-3.1-8.2-3.1-11.3 0-3.1 3.1-3.1 8.2 0 11.3L423 328h-99L198.2 170.8c-1.5-1.8-3.9-2.8-6.3-2.8H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h116.3l57.3 72-57.3 72H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h120c2.4 0 4.6-1 6.1-2.8l57.9-72.7 57.9 72.7c1.5 1.8 3.8 2.8 6.1 2.8h105l-26.6 26.4c-3.1 3.1-3.1 8.2 0 11.3 1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l33.6-33.4c6.2-6.3 6.2-16.4-.1-22.6z' }),
        _react2.default.createElement('path', { d: 'M323.7 184h99.2l-26.6 26.4c-3.1 3.1-3.1 8.2 0 11.3 3.1 3.1 8.2 3.1 11.3 0l35.6-35.4c6.2-6.2 6.2-16.3 0-22.5l-33.6-33.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3c-3.1 3.1-3.1 8.2 0 11.3l26.6 26.4H320c-2.4 0-4.6 1-6.1 2.8l-47.3 60.2 10.5 12.4 46.6-59.5z' })
      )
    )
  );
};

exports.default = Icon;