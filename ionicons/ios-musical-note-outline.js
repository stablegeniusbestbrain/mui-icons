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
        _react2.default.createElement('path', { d: 'M358.3 48.2c-4.7.9-106 20.1-110.2 20.9-4.2.8-8.1 3.6-8.1 8v259.4c0 1.6-.1 7.2-2.4 11.7-3.1 5.9-8.5 10.2-16.1 12.7-3.3 1.1-7.8 2.1-13.1 3.3-24.1 5.4-64.4 14.5-64.4 51.6 0 31 22.4 45 41.7 47.4 2.1.3 4.5.8 7.1.8 6.7 0 24-1.4 39.2-11.3 11-7.1 24.1-21.4 24.1-47.8V166.5l112-22.9V55.8c-.1-4.3-3.8-8.8-9.8-7.6zM240 404.8c0 15.4-5.6 27.3-16.8 34.5-11.9 7.8-26.3 8.7-30.5 8.7-1.9 0-3.6-.4-5.1-.6-2.3-.3-10.5-1.9-17.3-7.4-6.9-5.5-10.4-13.7-10.4-24.2 0-22.5 24.6-29.9 51.9-36.1 5.7-1.3 10.6-2.4 14.6-3.7 5.5-1.8 9.5-4.2 13.5-6.9v35.7zm112-274.1l-96 18.9V83.8l96-18.2v65.1z' })
      )
    )
  );
};

exports.default = Icon;