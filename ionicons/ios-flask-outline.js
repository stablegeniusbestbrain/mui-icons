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
        _react2.default.createElement('path', { d: 'M436.9 354.4L320 159V64h16V48h-32v115.4l2.5 3.8L423.1 362c6.8 12.8 9.3 26 9 38-.2 9.3-2 17.9-6.5 25.6-8.5 14.1-23.2 22.4-40.6 22.4H129.1c-17.5 0-32.5-8.4-41-22.7-11.9-19.8-10.9-38.1 2.3-63.1L181.8 208H240v-16h-48.7l14.7-24.8 2-3.8V160h48v-16h-48v-32h32V96h-32V64h80V48H176v16h16v95L76.1 354.4C67.7 370.3 63.6 385.8 64 400c1.1 36.5 28.7 64 65.1 64H385c36.3 0 62.1-27.6 63-64 .3-14.2-2.6-29.7-11.1-45.6z' }),
        _react2.default.createElement('path', { d: 'M108.3 358.6c-6.9 10.5-10.9 24.1-10.9 33.5 0 27.6 15.8 39.8 45.7 39.8H369c29.8 0 45-15.7 45.7-40 .3-9.5-3.1-22.7-10.1-33.3L332.7 240H179.5l-71.2 118.6zM323.7 256l67.2 110.9.2.1.2.2c5.4 8.2 7.6 18.3 7.5 24.2-.2 7.8-2.5 14-6.7 17.8-4.8 4.3-12.7 6.8-23 6.8H143c-11.1 0-19.3-2.2-23.7-6-1.5-1.2-6-5.1-6-18.1 0-5.9 2.9-16.4 8.3-24.7l.2-.3h.2L188.6 256h135.1z' })
      )
    )
  );
};

exports.default = Icon;