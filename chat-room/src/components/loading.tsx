export const Loading = ({loading}: { loading: boolean }) => {
    return <div>
        {loading ? 'loading' : '加载成功'}
    </div>
}
