import { Children } from 'react'

export const MapE = ({ render, of }) => Children.toArray(of.map((item, index) => render(item, index)))
