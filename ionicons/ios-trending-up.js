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
        _react2.default.createElement('path', { d: 'M472 128H360c-4.4 0-8 3.6-8 8s3.6 8 8 8h92L287.6 308.4l-83.9-84c-1.5-1.5-3.5-2.3-5.7-2.3-2.1 0-4.2.8-5.7 2.3L34.1 382.6c-1.6 1.6-2.1 3.7-2.1 5.9 0 2.1.6 3.9 2.1 5.5 1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3L198 241.3l83.9 84c3.1 3.1 8.2 3.1 11.3 0L464 156v92c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-4.4-3.6-8-8-8z' })
      )
    )
  );
};

exports.default = Icon;