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
        _react2.default.createElement('path', { d: 'M395 117c-11.6 0-21 9.2-21 20.5v109c0 4.8-4.6 8.6-9.5 8.6s-9.5-3.9-9.5-8.6V85.8c0-11.3-9.4-20.5-21-20.5s-21 9.2-21 20.5V212c0 4.8-3.6 8.6-8.5 8.6s-8.5-3.9-8.5-8.6V68.5c0-11.3-9.4-20.5-21-20.5s-21 9.2-21 20.5v160.8c0 4.8-4.1 8.6-9 8.6s-9-3.9-9-8.6V103c0-11.3-10.4-20.5-22-20.5s-22 9.2-22 20.5v217.4l-25.9-23.6c-26.1-22.6-48.3-32.3-66.3-15.6-12.1 11.7 6.9 30.8 26.7 53 19.2 21.4 70 92.3 113.2 117.6 0 0 16.7 12.2 40.6 12.2h57.2c46.1 0 78.4-39.5 78.4-94.5v-232c.1-11.2-9.3-20.5-20.9-20.5z' })
      )
    )
  );
};

exports.default = Icon;