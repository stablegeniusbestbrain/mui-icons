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
        _react2.default.createElement('path', { d: 'M48 270.9l119.9 51.6L197.7 460l57.5-80.9L372 464l92-416L48 270.9zM414.9 92.4L171.8 306.7l-87-37.4L414.9 92.4zM183.5 319l-.2-1.1 168.1-152.2-150.3 174.8.4.3h-.5l-1.6 51.6-15.9-73.4zm31.4 89.2l1.8-56.7 25.7 18.2-.1.1-27.4 38.4zm147.2 26.6L225 337.5 439.9 83l-77.8 351.8z' })
      )
    )
  );
};

exports.default = Icon;