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
        _react2.default.createElement('path', { d: 'M456 48H344c-4.4 0-8 3.6-8 8s3.6 8 8 8h92L329 171.7c-29.8-27.1-69.5-43.7-113-43.7-92.8 0-168 75.2-168 168s75.2 168 168 168 168-75.2 168-168c0-43.5-16.5-83.2-43.7-113L448 76v92c0 4.4 3.6 8 8 8s8-3.6 8-8V56c0-4.4-3.6-8-8-8zm-88 248c0 40.6-15.8 78.8-44.5 107.5S256.6 448 216 448c-40.6 0-78.8-15.8-107.5-44.5S64 336.6 64 296s15.8-78.8 44.5-107.5S175.4 144 216 144c40.6 0 78.8 15.8 107.5 44.5S368 255.4 368 296z' })
      )
    )
  );
};

exports.default = Icon;