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
        _react2.default.createElement('path', { d: 'M376.764 32H138.54C105.667 32 96 56.798 96 72.414v379.64c0 17.59 9.425 24.117 14.718 26.267 5.3 2.156 19.916 3.972 28.673-6.167 0 0 112.47-130.895 114.4-132.834 2.922-2.93 2.922-2.93 5.845-2.93h72.767c30.574 0 35.49-21.87 38.684-34.753 2.66-10.79 32.49-163.962 42.452-212.56C421.143 51.994 411.745 32 376.764 32zm-5.678 269.637c2.66-10.79 32.49-163.962 42.452-212.56m-50.846 7.593l-10 51.734C351.5 154.054 344.407 160 337.83 160h-95.917c-10.44 0-17.913 6.137-17.913 16.6v13.448c0 10.473 7.52 17.894 17.965 17.894h81.848c7.374 0 14.61 8.11 13.016 16.005-1.603 7.907-9.087 46.568-9.985 50.89-.902 4.327-5.845 11.724-14.61 11.724h-64.27c-11.705 0-15.244 1.533-23.074 11.293-7.836 9.77-78.255 94.592-78.255 94.592-.713.82-1.41.583-1.41-.313V95.897c0-6.685 5.793-14.524 14.48-14.524h191.172c7.035 0 13.61 6.63 11.815 15.297z' })
      )
    )
  );
};

exports.default = Icon;