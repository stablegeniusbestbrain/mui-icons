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
        _react2.default.createElement('path', { d: 'M438 187.713l-31.927-55.426L288 200.574V64h-64v136.574l-118.073-68.287-31.938 55.426L192.09 256 73.998 324.287l31.928 55.426L224 311.426V448h64V311.426l118.072 68.287 31.94-55.426L319.907 256 438 187.713zm-21.824 142.412l-15.963 27.866L272 284v148h-32V284l-128.213 74-15.97-27.785 128.23-74.197L95.82 181.86l15.964-27.858L240 228V80h32v148l128.213-74 15.97 27.785-128.23 74.18 128.223 74.16z' })
      )
    )
  );
};

exports.default = Icon;