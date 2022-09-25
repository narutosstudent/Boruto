import { CgSpinner } from 'react-icons/cg'
import { useLoadingStore } from '../../lib/store'
import './style.css'

export const LoadingSpinner = () => {
  const { status } = useLoadingStore()
  return status === 'loading' ? (
    <div role="alert" aria-label="loading" className="spinner">
      <CgSpinner className="spin " />
    </div>
  ) : null
}
