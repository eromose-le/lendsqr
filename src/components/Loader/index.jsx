import Loader from 'react-js-loader';
export const LoaderComponent = ({
  bgColor,
  textColor,
  iconSize,
  title,
  type,
  selectLoader
}) => {
  return (
    <div className={'row'}>
      <div className={'item loaderStyle'}>
        <Loader
          type={type}
          bgColor={bgColor}
          title={title}
          color={textColor}
          size={iconSize}
          data-loader={selectLoader}
        />
      </div>
    </div>
  );
};
