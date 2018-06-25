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
        _react2.default.createElement('path', { d: 'M232 306.667h48V176h-48v130.667z' }),
        _react2.default.createElement('path', { d: 'M407.67 170.27l30.786-30.785-33.942-33.94-30.785 30.785C341.216 111.057 300.37 96 256 96 149.96 96 64 181.96 64 288s85.96 192 192 192 192-85.96 192-192c0-44.37-15.057-85.217-40.33-117.73zm-45.604 223.796C333.734 422.398 296.066 438 256 438s-77.735-15.602-106.066-43.934C121.602 365.736 106 328.066 106 288s15.602-77.735 43.934-106.066C178.264 153.602 215.934 138 256 138s77.734 15.602 106.066 43.934C390.398 210.264 406 247.934 406 288s-15.602 77.735-43.934 106.066zM192 32h128v48H192z' })
      )
    )
  );
};

exports.default = Icon;