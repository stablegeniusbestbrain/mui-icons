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
        _react2.default.createElement('path', { d: 'M383.822 344.427c-16.045 0-31.024 5.326-41.72 15.98l-152.958-88.42c1.07-5.33 2.142-9.594 2.142-14.92 0-5.328-1.07-9.593-2.142-14.92l150.826-87.35c11.762 10.654 26.74 17.042 43.852 17.042 35.295 0 64.178-28.767 64.178-63.92C448 72.766 419.117 44 383.822 44c-35.297 0-64.18 28.767-64.18 63.92 0 5.327 1.066 9.593 2.143 14.92l-150.82 87.35c-11.768-10.655-26.742-17.042-43.857-17.042-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.09-6.39 43.856-17.042l151.89 88.42c-1.075 4.256-2.14 8.522-2.14 13.848 0 34.094 27.806 61.787 62.037 61.787 34.23 0 62.037-27.692 62.037-61.786s-27.805-61.787-62.035-61.787z' })
      )
    )
  );
};

exports.default = Icon;