import React, { Component } from 'react'
import api from '../../services/api.js'
import { Link } from 'react-router-dom'

import './styles.css'

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1
    }

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async (page = 1) => {
        try {
            const response = await api.get(`/products?page=${page}`)
    
            const { docs, ...productInfo } = response.data
    
            this.setState({ products: docs, productInfo, page })
        }catch(error) {
          console.log(error)
        }
    }

    prevPage = () => {
        const { page } = this.state

        if (page === 1) return

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const { page, products } = this.state

        if (products.length === 0) return

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    render() {
        const { products, page } = this.state

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product.id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product.id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={products.length === 0} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}