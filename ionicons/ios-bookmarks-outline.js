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
        _react2.default.createElement('path', { d: 'M432 64H281.6c-10.3 0-19.3 4.6-25.6 11.7-6.2-7.2-15.3-11.7-25.6-11.7H80c-18.8 0-33 13.3-33 32v286.1c0 18.8 14.2 33.9 33 33.9h143.3c13.8 0 24.7 4.2 24.7 19.4V448h16v-12.6c0-15.3 10.9-19.4 24.7-19.4H432c18.8 0 33-15.1 33-33.9V96c0-18.7-14.2-32-33-32zM248 411.1c-4.7-7.8-13.5-11.1-23.8-11.1H80c-9.4 0-16-8.5-16-17.9V96c0-9.4 6.6-16 16-16h143.3c12.8 0 24.7 12.8 24.7 22.2v308.9zM320 80h64v100.4l-22.9-14.5-9.1-6.4-9.1 6.4-22.9 14.5V80zm128 302.1c0 9.4-6.6 17.9-16 17.9H287.8c-10.3 0-19.1 2.3-23.8 11.1V102.2c0-9.4 11.9-22.2 24.7-22.2H304v131l48-32 48 32V80h32c9.4 0 16 6.7 16 16v286.1z' })
      )
    )
  );
};

exports.default = Icon;