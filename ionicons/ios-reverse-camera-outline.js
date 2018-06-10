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
        _react2.default.createElement('path', { d: 'M301.815 318.608C288.7 329.638 272.86 335.964 256 335.964c-36.36 0-66.286-28.965-70.89-61.965h30.61l-38.87-50-37.534 50h29.48c4.695 42 41.716 78 87.204 78 20.9 0 41.17-7.567 57.076-21.22l2.37-2.158-11.6-11.662-2.03 1.648zm13.921-119.723c-16.188-14.775-37.402-22.84-59.736-22.84-20.9 0-41.17 7.557-57.075 21.207l-2.37 2.052 11.598 11.61 2.033-1.706c12.927-10.872 29.197-17.005 45.814-17.005 36.343 0 66.274 28.797 70.89 63.797h-30.643l38.846 51.225L372.72 256h-29.513c-2.24-20-11.932-42.936-27.47-57.115z' }),
        _react2.default.createElement('path', { d: 'M417.5 160h-61.725c-32.105-36-42.22-48-54.525-48h-88.5c-12.314 0-22.167 12-54.52 48H145v-16h-34v16H97.5C79.855 160 64 173.217 64 190.684v176.018C64 384.17 79.855 400 97.5 400h320c17.645 0 30.5-15.83 30.5-33.3V190.685C448 173.217 435.145 160 417.5 160zM432 366.7c0 9.264-6.23 17.3-14.5 17.3h-320c-8.738 0-17.5-8.664-17.5-17.3V190.685C80 182.518 88.126 176 97.5 176h66.862c2.01 0 3.225-.2 5.768-3.2s7.702-10.008 11.08-13.795c11.296-12.666 19.457-21.915 25.316-27.132 4.746-4.225 6.21-3.873 6.225-3.873h88.5c.017 0 1.612-.363 6.71 4.22 6.14 5.52 14.705 16.84 26.558 30.197 2.888 3.255 7.214 8.11 9.317 10.44s4.252 3.143 5.77 3.143H417.5c8.832 0 14.5 5.965 14.5 14.684V366.7z' })
      )
    )
  );
};

exports.default = Icon;