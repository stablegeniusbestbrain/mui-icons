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
        _react2.default.createElement('path', { d: 'M407.2 130.4C360.7 111.5 309.8 102 256 102c-53.9 0-108.3 10.3-151.2 28-8.1 3.3-15.3 9-10.1 19.5S255.9 480 255.9 480l161-329.9c3.2-6.9.9-15.4-9.7-19.7zm-221 73.6c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32zM256 347c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32zm69.8-123c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32z' }),
        _react2.default.createElement('path', { d: 'M436.9 66C384.7 45.4 320.3 32 256 32c-64.3 0-127.6 12.1-180.9 33.4C70.4 67.3 64 71 64 79.2l9.7 24.1c2.8 4.9 8.7 8.2 15.1 8.2 1.8 0 4.3-.3 7.3-1.5 49-18.9 103.1-29.6 160-29.6 56.9 0 115.2 11.6 160 29.6 3.6 1.4 5.6 1.5 7.3 1.5 6.6 0 12.2-3.3 15-8.1l9.8-24.1c-.2-7.3-5-10.8-11.3-13.3z' })
      )
    )
  );
};

exports.default = Icon;