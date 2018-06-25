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
        _react2.default.createElement('path', { d: 'M256 447.8c-29.6 0-69.9-6.7-96-15.8 0 0-35 22.5-80 32 32.3 0 53.3-9 80-16 23 9 66.7 15.8 96 15.8 29.3 0 74-5.8 96-15.8 26.7 7 47 16 80 16-43.8-9.5-80-32-80-32-26.1 9.1-66.4 15.8-96 15.8zM445.5 263l-30.7-14.1-23-121.9v-.1C386.3 100.3 374.4 80 352 80h-34.6l-8.2-32H202.5l-8.1 32H160c-22.9 0-35.1 20.7-39.8 47l-23 121.9L66.5 263c-6.2 2.9-10.5 9.1-10.5 16.4 0 2.4.5 4.6 1.3 6.7L112 432c27.5 0 56.7-19 56.7-19 19.9 10 60.8 18.8 87.3 18.8s67.4-8.8 87.3-18.8c0 0 29.2 19 56.7 19l54.7-145.9c.8-2.1 1.3-4.3 1.3-6.7 0-7.3-4.3-13.5-10.5-16.4zM214.9 64h81.8l4.1 16h-90l4.1-16zm-79 65.9C139.7 108.9 147 96 160 96h192c12.8 0 19.7 12.8 24.1 34.1L397 240.7 360.6 224h.2c8.9 0 16.8-4.6 15.1-16l-15.1-80c-3-11-7.2-16-16.1-16H167.4c-8.9 0-13.6 5.3-16.1 16l-15.1 80c-1.3 8 6.2 16 15.1 16h.2L115 240.7l20.9-110.8zM256 176l-69.7 32h-33.8l14.5-76.6c.4-1.6.8-2.7 1.1-3.4h175.8c.3.7.8 1.9 1.3 3.7l14.4 76.3h-33.8L256 176zm-88.3 218.6l-7.7 5c-5.7 3.7-21.2 12-36.7 15.2L72 279.4c0-1.1.8-1.6 1.1-1.8L248 195.7v219.8c-24-1.5-56.2-8.8-72.1-16.8l-8.2-4.1zm221 20.2c-15.5-3.2-31-11.5-36.7-15.2l-7.7-5-8.2 4.1c-15.9 8-48.2 15.4-72.1 16.8V195.7l174.9 81.9c.3.2 1.1.7 1.1 1.8l-51.3 135.4z' }),
        _react2.default.createElement('ellipse', { cx: '300', cy: '266', rx: '12', ry: '22' }),
        _react2.default.createElement('ellipse', { cx: '212', cy: '266', rx: '12', ry: '22' })
      )
    )
  );
};

exports.default = Icon;