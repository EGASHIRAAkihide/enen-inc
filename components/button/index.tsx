type Props = {
  children: React.ReactNode;
  backgroundColor: string;
  color: string;
}

export const Button = ({
  backgroundColor,
  children,
  color,
}: Props) => {
  const className = `${backgroundColor} ${color} px-4 py-2 rounded`
  return (
    <div className='c-button'>
      <button type='button' className={className}>{children}</button>
    </div>
  )
}