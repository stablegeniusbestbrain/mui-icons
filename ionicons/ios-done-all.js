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
        _react2.default.createElement('path', { d: 'M366.9 182l-114 117.1-46.1-46.9-17.4 17.7 54.6 55.7c2.4 2.4 5.7 4.5 8.7 4.5 2.9 0 6.2-2 8.6-4.4L384 200l-17.1-18zm-221.5 70.1L128 269.8l54.6 55.7c2.4 2.4 5.7 4.5 8.7 4.5 2.9 0 6.2-2 8.6-4.4l8.7-8.9-63.2-64.6z' }),
        _react2.default.createElement('path', { d: 'M297.6 190l-62 63.7 17.2 17.5 61.9-63.3z' })
      )
    )
  );
};

exports.default = Icon;