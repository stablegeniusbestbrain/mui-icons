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
        _react2.default.createElement('circle', { cx: '256', cy: '272', r: '48' }),
        _react2.default.createElement('circle', { cx: '256', cy: '272', r: '48' }),
        _react2.default.createElement('path', { d: 'M480 272H320c0 23.9-13.1 44.7-32.6 55.7L365.6 464C433.1 425.4 480 355.3 480 272zm-224-64c11.7 0 22.7 3.2 32.1 8.7l80.6-138.3C335.6 59.1 297.1 48 256 48c-41.2 0-79.9 11.2-113.1 30.6l79.8 138.8c9.7-6 21.1-9.4 33.3-9.4zm-64 64H32c0 83.3 46.9 153.4 114.4 192l78.2-136.3c-19.5-11-32.6-31.8-32.6-55.7z' })
      )
    )
  );
};

exports.default = Icon;