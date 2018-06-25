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
        _react2.default.createElement('path', { d: 'M448 288c-15.268 0-28.03 10.695-31.223 25h-59.004l-30.18-90.896a8.006 8.006 0 0 0-7.76-5.478 7.996 7.996 0 0 0-7.524 5.795l-54.243 189.32-58.175-349.055a8.003 8.003 0 0 0-7.576-6.68 7.996 7.996 0 0 0-8.078 6.062L121.748 313H32v16h96a8 8 0 0 0 7.763-6.066l54.685-219.59 57.66 345.972a8.002 8.002 0 0 0 15.584.888l56.872-198.496 23.845 71.813A8.002 8.002 0 0 0 352 329h65.292c3.89 13.29 16.16 23 30.708 23 17.674 0 32-14.327 32-32s-14.326-32-32-32z' })
      )
    )
  );
};

exports.default = Icon;