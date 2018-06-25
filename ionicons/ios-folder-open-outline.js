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
        _react2.default.createElement('path', { d: 'M456.3 160H448v-41c0-13.3-9.4-23-22.8-23H230.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H88.7C74.9 64 64 74.3 64 87v73h-8.3c-12.8 0-25.3 5.1-23.5 24.3C34 203.5 55.7 423 55.7 423c2.7 17.8 11.7 25 25 25h352.5c12.7 0 21-7.8 23-25 0 0 22.2-212.9 23.6-233.5s-8.9-29.5-23.5-29.5zM80 87c0-4.3 4.4-7 8.7-7h96.1c3.5 0 3.7.2 6.2 2.5l22.5 22.4c4.8 4.8 10.4 7.1 17.4 7.1h194.3c4.5 0 6.8 2.6 6.8 7v41H80V87zm360.2 336c-.8 4.7-3.7 9-8 9H82c-4.5 0-9.5-3.5-10.3-9l-24-239c0-4.4 3.6-8 8-8h400.6c4.4 0 8 3.6 8 8l-24.1 239z' })
      )
    )
  );
};

exports.default = Icon;