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
        _react2.default.createElement('path', { d: 'M285.4 80c45.6 0 87.2 14.6 117.2 41.1 18.9 16.8 29.4 39 29.4 62.6s-10.4 45.8-29.4 62.6l-30.3 26.9c-10.4 9.2-16.1 21.2-16.1 33.9 0 12.6 5.7 24.6 16.1 33.9 9.3 8.2 16.4 11.4 30.6 13.8l.8.1c5.9 1 12.6 2.1 15.5 4.7 2.9 2.7 4.8 8 4.8 13.1 0 2.7-.7 7.6-4.5 11-34.6 30.7-85 48.4-138.2 48.4h-1.6c-26.5-.2-52.2-4.6-76.4-13.1-25.1-8.9-47.3-21.7-66-38.2-18.7-16.6-33.2-35.9-43-57.4-9.5-20.8-14.3-42.7-14.3-65.1 0-22.4 4.8-44.2 14.2-64.9 9.8-21.5 24.3-40.8 43-57.4 40.3-35.6 94.3-56 148.2-56m0-16c-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.3-12.7 11.9-36.6 0-47.8-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.1-30-80-44.9-127.7-44.9z' }),
        _react2.default.createElement('path', { d: 'M320 144c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16m0-16c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-96 5c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16m0-16c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-72 83c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16m0-16c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm8 110c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16m0-16c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm136 122c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-80c-17.6 0-32 14.4-32 32s14.4 32 32 32 32-14.4 32-32-14.4-32-32-32z' })
      )
    )
  );
};

exports.default = Icon;