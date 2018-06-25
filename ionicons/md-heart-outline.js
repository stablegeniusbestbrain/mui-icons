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
        _react2.default.createElement('path', { d: 'M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.22 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.21C393.28 322.44 464 258.61 464 179.094 464 114.22 414.082 64 349.6 64zm-80.764 329.257l-4.22 3.873-8.616 7.773-8.616-7.772-4.214-3.868c-50.418-46.282-93.96-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.93 23.715-59.316C118.957 104.444 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.66l24.49-29.115C297.63 108.167 323.464 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.228 432 179.095c0 29.033-12.467 57.46-40.422 92.17-28.784 35.74-72.325 75.71-122.742 121.992z' })
      )
    )
  );
};

exports.default = Icon;