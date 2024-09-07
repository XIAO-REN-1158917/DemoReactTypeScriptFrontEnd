
// There should be two parameters, one of them is the authority current account has and the other is the authority button needs
function withPermissions(requiredPermissions: string[], userPermissions: string[]): (Component: React.FC) => React.FC {
    return function (Component: React.FC) {
        return function (props: any): React.ReactElement | null {
            const hasPermission: boolean = requiredPermissions.every(item => userPermissions.includes(item))
            if (!hasPermission) {
                return null
            }
            return <Component {...props} />
        }
    }
}

export default withPermissions

