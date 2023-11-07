import { Dialog } from 'primereact/dialog'

export const Dialogz = (props) => {
    const { title, visible, setVisible, position, onHide, width, ...prop } = props

    return (
        <Dialog
            header={title}
            visible={visible}
            position={position || 'top'}
            style={{ width: width || '50vw' }}
            onHide={onHide ? () => onHide() : () => setVisible(false)}
            draggable={false}
            resizable={false}
            {...prop}
        >
            {props.children}
        </Dialog>
    )
}
