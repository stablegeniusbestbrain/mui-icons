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
        _react2.default.createElement('path', { d: 'M365 388c30-35.2 47-84 47-132s-15.6-92.3-41.9-128.1l-13.6 10.3c24.2 32.9 38.6 73.7 38.6 117.8s-14.4 84.9-38.6 117.8L365 388zm-13.8-132c0-35.9-12-69-32-95.8l-13.5 10.1c17.9 24 28.6 53.6 28.6 85.8 0 21.4-4.8 41.7-13.3 60l10.1 17.3c12.8-23 20.1-49.3 20.1-77.4zm-57.3 0c0-24-8.2-46-21.8-63.9l-13.5 9.8c8 10.4 13.7 22.5 16.5 35.7l18.1 30.8c.5-4 .7-8.2.7-12.4zm-135.5-40H100v80h58.4l69.6 56v-92.8l-39.5-67.4zM162.8 80L148 88.5 349.2 432l14.8-8.5z' })
      )
    )
  );
};

exports.default = Icon;