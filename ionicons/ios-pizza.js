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
        _react2.default.createElement('path', { d: 'M418.3 91.5C388.2 78 342.3 64 256.7 64c-85.4 0-130 12.3-161.5 27.4-27.5 13.1-19.1 24-13.1 36.6 4 8.6 8.2 11.8 14.5 11.8.5 0 1 0 1.4-.1L256.7 448 415 140.5h.9c6.5 0 11-3.4 15.5-12.6 6.1-12.4 9.8-26.2-13.1-36.4zm-285 82.4c9-3.9 19-4.4 28.4-1.2 10 3.4 18.2 10.6 22.9 20.1 4.7 9.6 5.4 20.4 2.1 30.5-3 9-8.9 16.5-16.9 21.3-13.4-25.8-26.1-50.5-36.5-70.7zm163.5 156.5c-21.9 0-39.7-17.9-39.7-40s17.8-40 39.7-40c14 0 26.7 7.3 33.9 19.2l-31.2 60.7c-.9.1-1.8.1-2.7.1zM274 112.3c31.9 1 56.8 4.8 76.3 9.3-2 9.2-7.1 17.3-14.7 23-8.3 6.2-18.4 8.8-28.6 7.3-10.2-1.5-19.2-6.9-25.3-15.3-5.4-7.1-8-15.6-7.7-24.3zm143.1 8.6c-.9 1.9-1.6 3-2.1 3.6-3.3-.4-9.8-2.7-16.7-5.1-24.6-8.8-65.7-23.4-141.6-23.4-76.3 0-117.8 14.3-142.6 22.8-6.6 2.3-12.9 4.4-16.3 4.9-.3-.6-.8-1.4-1.4-2.6-.6-1.2-1.1-2.4-1.7-3.5-.9-1.8-2.1-4.2-2.6-5.8 1.1-1 3.7-3.2 9.8-6.1 25.2-12 65.6-25.8 154.7-25.8 86.7 0 130.1 14.9 155.2 26.1 7.2 3.2 8.2 5.6 8.2 5.6.1.3.6 2.1-2.9 9.3z' })
      )
    )
  );
};

exports.default = Icon;